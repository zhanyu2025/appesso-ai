package xiaozhi.modules.app.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.LocalDate; // 导入 LocalDate 用于 dob

@Data
@TableName("Profile") // 对应数据库表名
public class ProfileEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @TableId
    private String id; // 与 Prisma schema 中的 @id @unique @db.VarChar(32) 对应
    @TableField("user_id")
    private String userId; // 与 Prisma schema 中的 user_id String @unique @db.VarChar(32) 对应
    @TableField("tts_model_id")
    private String ttsModelId;
    @TableField("tts_voice_id")
    private String ttsVoiceId;
    @TableField("system_prompt")
    private String systemPrompt;
    private String name; // 与 Prisma schema 中的 name String @db.VarChar(50) 对应
    private String img; // 与 Prisma schema 中的 img String? @db.VarChar(4000) 对应
    private String website; // 与 Prisma schema 中的 website String? @db.VarChar(100) 对应
    private String bio; // 与 Prisma schema 中的 bio String? @db.VarChar(255) 对应
    private LocalDate dob; // 对应 Prisma schema 中的 dob DateTime?
    @TableField("create_at")
    private LocalDateTime createAt; // 对应 Prisma schema 中的 create_at DateTime @default(now()) @db.DateTime(0)
    @TableField("update_at")
    private LocalDateTime updateAt; // 对应 Prisma schema 中的 update_at DateTime? @db.DateTime(0)
}
