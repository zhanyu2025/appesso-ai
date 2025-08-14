import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useCallback, useRef } from 'react';

import TextInput from './TextInput';
import Button from './Button';

import axios from '../utils/axios';
import useForm from '../hooks/useForm';
import { useAuth } from '../contexts/auth-context';

import usePageTitle from '../hooks/usePageTitle';

const SigninForm = () => {
  usePageTitle('登录 / 猿星球');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const autoSubmitTimeoutRef = useRef(null);

  const loginMobile = useMutation(({ mobile }) => {
    return axios.post('/api/auth/login/mobile', {
      mobile,
    });
  });

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.mobile) {
      errors.mobile = '手机号码不能为空';
    } else if (!/^\d{11}$/.test(values.mobile)) {
      errors.mobile = '手机号码必须是11位数字';
    }
    return errors;
  }, []);

  const form = useForm({
    initialValues: {
      mobile: '',
    },
    validate,
    onSubmit: async (values) => {
      loginMobile.mutate(
        {
          mobile: values.mobile,
        },
        {
          onSuccess: (response) => {
            const { user, accessToken, expiresAt } = response.data;
            login(user, accessToken, expiresAt);
            if (location.state?.from?.pathname) {
              navigate(location.state?.from?.pathname);
            } else {
              navigate('/');
            }
          },
          onError: (err) => {
            const error = err.response.data.errors || err.response.data.error;
            if (Array.isArray(error)) {
              const errors = error.reduce((acc, cur) => {
                acc[cur.param] = cur.msg;
                return acc;
              }, {});
              form.setMultipleFieldsError(errors);
            } else {
              form.setFieldError('mobile', error.message || '登录失败');
            }
          },
        }
      );
    },
  });

  return (
    <div className="bg-background h-screen py-10 px-10 flex justify-center items-center">
      <div className="max-w-xs w-full">
        <div className="mb-4 text-center">
          <h3 className="text-on-background text-3xl font-black mb-4">
            欢迎来到猿星球
          </h3>
          <p className="text-on-background/70 text-base mb-8">
            猿星球使用手机号快速登录，无需复杂注册流程
          </p>
          <form onSubmit={form.handleSubmit}>
            <div className="relative mb-4">
              <TextInput
                id="mobile"
                name="mobile"
                label="手机号码"
                value={form.values.mobile}
                error={form.touched.mobile ? form.errors.mobile : ''}
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={(e) => {
                  form.handleChange(e);

                  // Clear any existing timeout
                  if (autoSubmitTimeoutRef.current) {
                    clearTimeout(autoSubmitTimeoutRef.current);
                  }

                  // Log input value for debugging
                  // console.log(
                  //   'Input value:',
                  //   e.target.value,
                  //   'Length:',
                  //   e.target.value.length
                  // );

                  // Auto-submit if we have exactly 11 digits
                  if (
                    e.target.value.length === 11 &&
                    /^\d{11}$/.test(e.target.value)
                  ) {
                    // console.log('Auto-submit triggered for:', e.target.value);
                    // Small delay to ensure form state is updated
                    autoSubmitTimeoutRef.current = setTimeout(() => {
                      // Double-check validation before submitting
                      const errors = validate({ mobile: e.target.value });
                      // console.log('Validation errors:', errors);
                      if (Object.keys(errors).length === 0) {
                        // console.log('Submitting form automatically');
                        // Manually trigger the form submission by calling the mutation directly
                        loginMobile.mutate(
                          {
                            mobile: e.target.value,
                          },
                          {
                            onSuccess: (response) => {
                              const { user, accessToken, expiresAt } =
                                response.data;
                              login(user, accessToken, expiresAt);
                              if (location.state?.from?.pathname) {
                                navigate(location.state?.from?.pathname);
                              } else {
                                navigate('/');
                              }
                            },
                            onError: (err) => {
                              const error =
                                err.response.data.errors ||
                                err.response.data.error;
                              if (Array.isArray(error)) {
                                const formErrors = error.reduce((acc, cur) => {
                                  acc[cur.param] = cur.msg;
                                  return acc;
                                }, {});
                                form.setMultipleFieldsError(formErrors);
                              } else {
                                form.setFieldError(
                                  'mobile',
                                  error.message || '登录失败'
                                );
                              }
                            },
                          }
                        );
                      }
                    }, 300);
                  }
                }}
              />
            </div>
            <div>
              <Button type="submit" isLoading={loginMobile.isLoading}>
                开始使用
              </Button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-on-background/60 text-sm">
              输入手机号即可登录或自动注册
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
