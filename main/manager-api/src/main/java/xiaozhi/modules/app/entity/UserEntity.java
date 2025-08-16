package xiaozhi.modules.app.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField; // 导入 TableField 注解
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("User") // 对应数据库表名
public class UserEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @TableId
    private String id; // 与 Prisma schema 中的 @id @unique @db.VarChar(32) 对应
    private String username; // 与 Prisma schema 中的 @unique @db.VarChar(50) 对应
    @TableField("sys_user_id") // 映射数据库字段 sys_user_id
    private Long sysUserId; // 对应 Prisma schema 中的 sys_user_id BigInt?
    @TableField("ai_role_id") // 映射数据库字段 ai_role_id
    private String aiRoleId; // 对应 Prisma schema 中的 ai_role_id String? @db.VarChar(32)
    @TableField("create_at") // 映射数据库字段 create_at
    private LocalDateTime createAt; // 对应 Prisma schema 中的 create_at DateTime @default(now()) @db.DateTime(0)
    @TableField("update_at") // 映射数据库字段 update_at
    private LocalDateTime updateAt; // 对应 Prisma schema 中的 update_at DateTime? @db.DateTime(0)
}
