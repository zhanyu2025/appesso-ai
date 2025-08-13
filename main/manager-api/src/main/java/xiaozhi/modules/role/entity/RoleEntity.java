package xiaozhi.modules.role.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Date;

@Data
@TableName("ai_role")
@Schema(description = "AI角色信息表")
public class RoleEntity {

    @TableId(type = IdType.ASSIGN_UUID)
    @Schema(description = "主键ID")
    private String id;

    @Schema(description = "智能体ID")
    private String agentId;

    @Schema(description = "角色名称")
    private String name;

    @Schema(description = "语音合成模型ID")
    private String ttsModelId;

    @Schema(description = "音色ID")
    private String ttsVoiceId;

    @Schema(description = "角色设定参数")
    private String systemPrompt;

    @Schema(description = "创建时间")
    private Date createDate;

    @Schema(description = "更新时间")
    private Date updateDate;
}
