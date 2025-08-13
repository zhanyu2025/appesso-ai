package xiaozhi.modules.device.service;

import com.baomidou.mybatisplus.extension.service.IService;
import xiaozhi.modules.device.entity.DeviceRoleEntity;

public interface IDeviceRoleService extends IService<DeviceRoleEntity> {
    /**
     * 根据设备ID获取设备角色关联信息
     * @param deviceId 设备ID
     * @return DeviceRoleEntity 设备角色关联实体
     */
    DeviceRoleEntity getDeviceRoleByDeviceId(String deviceId);
}
