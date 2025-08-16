package xiaozhi.modules.app.dto;

import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;
    private String username;
    private Long sysUserId;
    private String aiRoleId;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
