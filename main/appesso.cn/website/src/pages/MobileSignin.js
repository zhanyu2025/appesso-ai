import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useCallback, useRef, useState } from 'react';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axios from '../utils/axios';

import useForm from '../hooks/useForm';
import { useAuth } from '../contexts/auth-context';

import usePageTitle from '../hooks/usePageTitle';

const MobileSignin = () => {
  usePageTitle('手机号登录 / 猿星球');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const autoSubmitTimeoutRef = useRef(null);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef(null);

  // 发送验证码的mutation
  const sendCode = useMutation(({ mobile }) => {
    return axios.post('/api/auth/send/mobile/code', {
      mobile,
    });
  });

  // 手机号登录的mutation
  const loginMobile = useMutation(({ mobile, code }) => {
    return axios.post('/api/auth/login/mobile', {
      mobile,
      code,
    });
  });

  const validateMobile = useCallback((values) => {
    const errors = {};
    if (!values.mobile) {
      errors.mobile = '手机号码不能为空';
    } else if (!/^\d{11}$/.test(values.mobile)) {
      errors.mobile = '手机号码必须是11位数字';
    }
    return errors;
  }, []);

  const validateCode = useCallback((values) => {
    const errors = {};
    if (!values.code) {
      errors.code = '验证码不能为空';
    } else if (!/^\d{6}$/.test(values.code)) {
      errors.code = '验证码必须是6位数字';
    }
    return errors;
  }, []);

  const mobileForm = useForm({
    initialValues: {
      mobile: '',
    },
    validate: validateMobile,
    onSubmit: async (values) => {
      // 发送验证码
      sendCode.mutate(
        {
          mobile: values.mobile,
        },
        {
          onSuccess: () => {
            setShowCodeInput(true);
            // 启动60秒倒计时
            setCountdown(60);
            countdownRef.current = setInterval(() => {
              setCountdown((prev) => {
                if (prev <= 1) {
                  clearInterval(countdownRef.current);
                  return 0;
                }
                return prev - 1;
              });
            }, 1000);
          },
          onError: (err) => {
            const error = err.response?.data?.error || '发送验证码失败';
            mobileForm.setFieldError('mobile', error);
          },
        }
      );
    },
  });

  const codeForm = useForm({
    initialValues: {
      mobile: '',
      code: '',
    },
    validate: validateCode,
    onSubmit: async (values) => {
      loginMobile.mutate(
        {
          mobile: values.mobile,
          code: values.code,
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
            const error = err.response?.data?.error || '登录失败';
            codeForm.setFieldError('code', error);
          },
        }
      );
    },
  });

  // 处理手机号输入变化
  const handleMobileChange = (e) => {
    mobileForm.handleChange(e);
    codeForm.handleChange({
      target: { name: 'mobile', value: e.target.value },
    });

    // 清除已存在的定时器
    if (autoSubmitTimeoutRef.current) {
      clearTimeout(autoSubmitTimeoutRef.current);
    }

    // 如果输入了11位数字，自动提交
    if (e.target.value.length === 11 && /^\d{11}$/.test(e.target.value)) {
      autoSubmitTimeoutRef.current = setTimeout(() => {
        const errors = validateMobile({ mobile: e.target.value });
        if (Object.keys(errors).length === 0) {
          mobileForm.handleSubmit(new Event('submit'));
        }
      }, 300);
    }
  };

  // 处理验证码输入变化
  const handleCodeChange = (e) => {
    codeForm.handleChange(e);

    // 如果输入了6位数字，自动提交
    if (e.target.value.length === 6 && /^\d{6}$/.test(e.target.value)) {
      setTimeout(() => {
        const errors = validateCode({ code: e.target.value });
        if (Object.keys(errors).length === 0) {
          codeForm.handleSubmit(new Event('submit'));
        }
      }, 300);
    }
  };

  // 重新发送验证码
  const handleResendCode = () => {
    if (countdown > 0) return;

    sendCode.mutate(
      {
        mobile: mobileForm.values.mobile,
      },
      {
        onSuccess: () => {
          // 重新启动60秒倒计时
          setCountdown(60);
          countdownRef.current = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(countdownRef.current);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        },
        onError: (err) => {
          const error = err.response?.data?.error || '发送验证码失败';
          mobileForm.setFieldError('mobile', error);
        },
      }
    );
  };

  // 返回手机号输入
  const handleBackToMobile = () => {
    setShowCodeInput(false);
    codeForm.setFieldError('code', '');
  };

  return (
    <div className="bg-background h-screen py-10 px-10 flex justify-center items-center">
      <div className="max-w-xs w-full">
        <div className="mb-4 text-center">
          <h3 className="text-on-background text-3xl font-black mb-4">
            欢迎来到猿星球
          </h3>
          {!showCodeInput ? (
            <>
              <p className="text-on-background/70 text-base mb-8">
                输入手机号快速开始使用
              </p>
              <form onSubmit={mobileForm.handleSubmit}>
                <div className="relative mb-4">
                  <TextInput
                    id="mobile"
                    name="mobile"
                    label="手机号码"
                    type="tel"
                    value={mobileForm.values.mobile}
                    error={
                      mobileForm.touched.mobile ? mobileForm.errors.mobile : ''
                    }
                    onFocus={mobileForm.handleFocus}
                    onBlur={mobileForm.handleBlur}
                    onChange={handleMobileChange}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    isLoading={sendCode.isLoading}
                    disabled={sendCode.isLoading || countdown > 0}
                  >
                    {sendCode.isLoading ? '发送中...' : '获取验证码'}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className="text-on-background/70 text-base mb-8">
                已发送验证码至 {mobileForm.values.mobile}
              </p>
              <form onSubmit={codeForm.handleSubmit}>
                <div className="relative mb-4">
                  <TextInput
                    id="code"
                    name="code"
                    label="验证码"
                    type="tel"
                    value={codeForm.values.code}
                    error={codeForm.touched.code ? codeForm.errors.code : ''}
                    onFocus={codeForm.handleFocus}
                    onBlur={codeForm.handleBlur}
                    onChange={handleCodeChange}
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <button
                    type="button"
                    onClick={handleBackToMobile}
                    className="text-primary text-sm"
                  >
                    重新输入手机号
                  </button>
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={countdown > 0 || sendCode.isLoading}
                    className={`text-sm ${
                      countdown > 0 || sendCode.isLoading
                        ? 'text-on-surface/50'
                        : 'text-primary'
                    }`}
                  >
                    {countdown > 0
                      ? `${countdown}秒后重新发送`
                      : '重新发送验证码'}
                  </button>
                </div>
                <div>
                  <Button type="submit" isLoading={loginMobile.isLoading}>
                    登录
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSignin;
