import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useCallback, useMemo, useRef } from 'react';

import TextInput from './TextInput';
import Button from './Button';
import axios from '../utils/axios';

import useForm from '../hooks/useForm';

import usePageTitle from '../hooks/usePageTitle';

const DeviceActivationForm = () => {
  usePageTitle('设备激活 / 猿星球');
  const location = useLocation();
  const navigate = useNavigate();
  const autoSubmitTimeoutRef = useRef(null);

  // 使用 useMemo 解析 URL search params 以避免每次渲染都重新计算
  const userId = useMemo(
    () => new URLSearchParams(location.search).get('userId'),
    [location.search]
  );

  const mutation = useMutation(({ code, chatUserId }) => {
    return axios.post(`/api/users/me/devices/activation`, { code, chatUserId });
  });

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.code) {
      errors.code = '激活码不能为空';
    } else if (!/^\d{6}$/.test(values.code)) {
      errors.code = '激活码必须是6位数字';
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
          chatUserId: userId, // 在提交时传递 userId
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
            请输入设备播报的6位数激活码
          </p>
          <form onSubmit={form.handleSubmit}>
            <div className="relative mb-4">
              <TextInput
                id="code"
                name="code"
                label="激活码"
                value={form.values.code}
                error={form.touched.code ? form.errors.code : ''}
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={(e) => {
                  form.handleChange(e);

                  // 清除任何现有的超时
                  if (autoSubmitTimeoutRef.current) {
                    clearTimeout(autoSubmitTimeoutRef.current);
                  }

                  // 如果输入刚好是6位数字，则自动提交
                  if (
                    e.target.value.length === 6 &&
                    /^\d{6}$/.test(e.target.value)
                  ) {
                    // 设置一个小的延迟以确保表单状态已更新
                    autoSubmitTimeoutRef.current = setTimeout(() => {
                      // 提交前再次检查验证
                      const errors = validate({ code: e.target.value });
                      if (Object.keys(errors).length === 0) {
                        // 直接调用 mutation 来手动触发提交
                        mutation.mutate(
                          {
                            code: e.target.value,
                            chatUserId: userId, // 在自动提交时也传递 userId
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

export default DeviceActivationForm;
