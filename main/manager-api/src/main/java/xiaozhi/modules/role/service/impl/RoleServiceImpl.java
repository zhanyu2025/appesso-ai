package xiaozhi.modules.role.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import xiaozhi.modules.role.dao.RoleDao;
import xiaozhi.modules.role.entity.RoleEntity;
import xiaozhi.modules.role.service.IRoleService;

@Service("RoleService")
public class RoleServiceImpl extends ServiceImpl<RoleDao, RoleEntity> implements IRoleService {

    @Override
    public RoleEntity getRoleById(String roleId) {
        return baseMapper.selectById(roleId);
    }
}
