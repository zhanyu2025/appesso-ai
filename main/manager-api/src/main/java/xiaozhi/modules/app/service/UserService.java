package xiaozhi.modules.app.service;

import xiaozhi.common.service.BaseService;
import xiaozhi.modules.app.entity.UserEntity;
import xiaozhi.modules.app.dto.UserDTO;

public interface UserService extends BaseService<UserEntity> {
    void save(UserDTO dto);
}
