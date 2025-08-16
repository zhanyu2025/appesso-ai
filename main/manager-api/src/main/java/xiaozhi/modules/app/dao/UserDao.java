package xiaozhi.modules.app.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import xiaozhi.modules.app.entity.UserEntity;

@Mapper
public interface UserDao extends BaseMapper<UserEntity> {

}
