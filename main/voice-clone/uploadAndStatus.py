import base64
import os
import requests

host = "https://openspeech.bytedance.com"

def train(appid, token, audio_path, spk_id):
    url = host + "/api/v1/mega_tts/audio/upload"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer;" + token,
        "Resource-Id": "volc.megatts.voiceclone",
    }
    encoded_data, audio_format = encode_audio_file(audio_path)
    audios = [{"audio_bytes": encoded_data, "audio_format": audio_format}]
    data = {"appid": appid, "speaker_id": spk_id, "audios": audios, "source": 2,"language": 0, "model_type": 3}
    # 额外参数
    extra_params = {}
    if extra_params:
        data["extra_params"] =  json.dumps(extra_params)
    response = requests.post(url, json=data, headers=headers)
    print("status code = ", response.status_code)
    if response.status_code != 200:
        raise Exception("train请求错误:" + response.text)
    print("headers = ", response.headers)
    print(response.json())


def get_status(appid, token, spk_id):
    url = host + "/api/v1/mega_tts/status"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer;" + token,
        "Resource-Id": "volc.megatts.voiceclone",
    }
    body = {"appid": appid, "speaker_id": spk_id}
    response = requests.post(url, headers=headers, json=body)
    print(response.json())


def encode_audio_file(file_path):
    with open(file_path, 'rb') as audio_file:
        audio_data = audio_file.read()
        encoded_data = str(base64.b64encode(audio_data), "utf-8")
        audio_format = os.path.splitext(file_path)[1][1:]  # 获取文件扩展名作为音频格式
        return encoded_data, audio_format


if __name__ == "__main__":
    appid = "7820115171"
    token = "o2H8GJLh9eO-7kuzzyw93To2iJ1C6YC-"
    spk_id = "S_vX5vIe9C1"
    print("appid = ", appid)
    print("token = ", token)
    print("spk_id = ", spk_id)
    train(appid=appid, token=token, audio_path="./audios/yaoyao_first.mp3", spk_id=spk_id)
    get_status(appid=appid, token=token, spk_id=spk_id)
