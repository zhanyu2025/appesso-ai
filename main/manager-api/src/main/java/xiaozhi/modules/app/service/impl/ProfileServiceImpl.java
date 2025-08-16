package xiaozhi.modules.app.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import xiaozhi.common.service.impl.BaseServiceImpl;
import xiaozhi.common.utils.ConvertUtils;
import xiaozhi.modules.app.dao.ProfileDao;
import xiaozhi.modules.app.dto.ProfileDTO;
import xiaozhi.modules.app.entity.ProfileEntity;
import xiaozhi.modules.app.service.ProfileService;

import java.time.LocalDateTime;

@AllArgsConstructor
@Service
public class ProfileServiceImpl extends BaseServiceImpl<ProfileDao, ProfileEntity> implements ProfileService {

    private final ProfileDao profileDao;

    @Override
    public void save(ProfileDTO dto) {
        ProfileEntity entity = ConvertUtils.sourceToTarget(dto, ProfileEntity.class);
        if (entity.getCreateAt() == null) {
            entity.setCreateAt(LocalDateTime.now());
        }
        insert(entity);
    }
}
