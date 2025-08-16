package xiaozhi.modules.app.dto;

import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.LocalDate;

@Data
public class ProfileDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;
    private String userId;
    private String name;
    private String img;
    private String website;
    private String bio;
    private LocalDate dob;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
