package xiaozhi.modules.role.service;

import com.baomidou.mybatisplus.extension.service.IService;
import xiaozhi.modules.role.entity.RoleEntity;

public interface IRoleService extends IService<RoleEntity> {
    /**
     * 根据角色ID获取AI角色信息
     * @param roleId 角色ID
     * @return RoleEntity AI角色实体
     */
    RoleEntity getRoleById(String roleId);
}
