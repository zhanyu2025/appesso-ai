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

export const sendMobileCode = async (mobile, code) => {
  const params = {
    PhoneNumberSet: [`+86${mobile}`],
    SmsSdkAppId: '1401029251',
    TemplateID: '2507817',
    SignName: '666836',
    TemplateParamSet: [code, 2],
  };
  const result = await smsClient.SendSms(params);
  return result;
};

export default {
  smsClient,
  sendMobileCode,
};
