package xiaozhi.modules.device.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import xiaozhi.modules.device.dao.DeviceRoleDao;
import xiaozhi.modules.device.entity.DeviceRoleEntity;
import xiaozhi.modules.device.service.IDeviceRoleService;

@Service("deviceRoleService")
public class DeviceRoleServiceImpl extends ServiceImpl<DeviceRoleDao, DeviceRoleEntity> implements IDeviceRoleService {

    @Override
    public DeviceRoleEntity getDeviceRoleByDeviceId(String deviceId) {
        return baseMapper.selectOne(new QueryWrapper<DeviceRoleEntity>().eq("device_id", deviceId));
    }
}
