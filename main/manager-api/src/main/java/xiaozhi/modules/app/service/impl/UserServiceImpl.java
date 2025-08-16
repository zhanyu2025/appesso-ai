package xiaozhi.modules.app.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import xiaozhi.common.service.impl.BaseServiceImpl;
import xiaozhi.common.utils.ConvertUtils;
import xiaozhi.modules.app.dao.UserDao;
import xiaozhi.modules.app.dto.UserDTO;
import xiaozhi.modules.app.entity.UserEntity;
import xiaozhi.modules.app.service.UserService;

import java.time.LocalDateTime;

@AllArgsConstructor
@Service
public class UserServiceImpl extends BaseServiceImpl<UserDao, UserEntity> implements UserService {

    private final UserDao userDao;

    @Override
    public void save(UserDTO dto) {
        UserEntity entity = ConvertUtils.sourceToTarget(dto, UserEntity.class);
        if (entity.getCreateAt() == null) {
            entity.setCreateAt(LocalDateTime.now());
        }
        insert(entity);
    }
}
