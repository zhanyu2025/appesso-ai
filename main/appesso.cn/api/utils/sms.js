const tencentcloud = require('tencentcloud-sdk-nodejs-sms');

const SmsClient = tencentcloud.sms.v20210111.Client;

const smsClient = new SmsClient({
  credential: {
    secretId: process.env.TENCENTCLOUD_SECRET_ID,
    secretKey: process.env.TENCENTCLOUD_SECRET_KEY,
  },
  region: 'ap-guangzhou',
  profile: {
    httpProfile: {
      endpoint: 'sms.tencentcloudapi.com',
    },
  },
});

const sendMobileCode = async (mobile, code) => {
  try {
    const params = {
      PhoneNumberSet: [`+86${mobile}`],
      SmsSdkAppId: '1401029251',
      TemplateId: '2507817',
      SignName: process.env.SMS_SIGN_NAME || '666836',
      TemplateParamSet: [code, '2'],
    };
    console.log('发送短信参数:', JSON.stringify(params, null, 2));
    const result = await smsClient.SendSms(params);
    console.log('短信发送结果:', JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error('发送短信验证码失败:', error);
    throw new Error('短信发送失败，请稍后重试');
  }
};

module.exports = {
  smsClient,
  sendMobileCode,
};
