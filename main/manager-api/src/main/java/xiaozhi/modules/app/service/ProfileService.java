package xiaozhi.modules.app.service;

import xiaozhi.common.service.BaseService;
import xiaozhi.modules.app.entity.ProfileEntity;
import xiaozhi.modules.app.dto.ProfileDTO;

public interface ProfileService extends BaseService<ProfileEntity> {
    void save(ProfileDTO dto);
}
