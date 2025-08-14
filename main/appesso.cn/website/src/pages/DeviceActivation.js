import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useCallback, useRef } from 'react';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axios from '../utils/axios';

import useForm from '../hooks/useForm';

import usePageTitle from '../hooks/usePageTitle';

const DeviceActivation = () => {
  usePageTitle('设备激活 / 猿星球');
  const navigate = useNavigate();
  const autoSubmitTimeoutRef = useRef(null);

  const mutation = useMutation(({ code }) => {
    return axios.post(`/api/devices/${code}/activation`);
  });

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.code) {
      errors.code = '验证码不能为空';
    } else if (!/^\d{6}$/.test(values.code)) {
      errors.code = '验证码必须是6位数字';
    }
    return errors;
  }, []);

  const form = useForm({
    initialValues: {
      code: '',
    },
    validate,
    onSubmit: async (values) => {
      mutation.mutate(
        {
          code: values.code,
        },
        {
          onSuccess: (response) => {
            navigate('/');
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
              form.setFieldError('code', error.message || '设备激活失败');
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
            设备激活
          </h3>
          <p className="text-on-background/70 text-base mb-8">
            请输入设备播报的6位数验证码
          </p>
          <form onSubmit={form.handleSubmit}>
            <div className="relative mb-4">
              <TextInput
                id="code"
                name="code"
                label="验证码"
                value={form.values.code}
                error={form.touched.code ? form.errors.code : ''}
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={(e) => {
                  form.handleChange(e);

                  // Clear any existing timeout
                  if (autoSubmitTimeoutRef.current) {
                    clearTimeout(autoSubmitTimeoutRef.current);
                  }

                  // Auto-submit if we have exactly 11 digits
                  if (
                    e.target.value.length === 6 &&
                    /^\d{6}$/.test(e.target.value)
                  ) {
                    // console.log('Auto-submit triggered for:', e.target.value);
                    // Small delay to ensure form state is updated
                    autoSubmitTimeoutRef.current = setTimeout(() => {
                      // Double-check validation before submitting
                      const errors = validate({ code: e.target.value });
                      // console.log('Validation errors:', errors);
                      if (Object.keys(errors).length === 0) {
                        // console.log('Submitting form automatically');
                        // Manually trigger the form submission by calling the mutation directly
                        mutation.mutate(
                          {
                            code: e.target.value,
                          },
                          {
                            onSuccess: (response) => {
                              navigate('/');
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
                                  'code',
                                  error.message || '设备激活失败'
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
              <Button type="submit" isLoading={mutation.isLoading}>
                立即激活
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeviceActivation;
