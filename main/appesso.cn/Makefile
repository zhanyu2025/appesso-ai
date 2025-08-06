# 生产环境配置
PROD_SERVER = 43.138.252.253
PROD_USER = root
PROD_PATH = /var/www/appesso

# 部署到生产环境
deploy:
	ssh $(PROD_USER)@$(PROD_SERVER) "if [ ! -d $(PROD_PATH) ]; then \
		echo '首次部署，克隆代码...'; \
		git clone git@github.com:zhanyu2025/appesso.cn.git $(PROD_PATH); \
		cd $(PROD_PATH); \
	else \
		echo '更新代码...'; \
		cd $(PROD_PATH) && git pull origin main; \
	fi"
	scp api/.env.production $(PROD_USER)@$(PROD_SERVER):$(PROD_PATH)/api/.env
	scp website/.env.production $(PROD_USER)@$(PROD_SERVER):$(PROD_PATH)/website/.env
	ssh $(PROD_USER)@$(PROD_SERVER) "cd $(PROD_PATH) && docker-compose -f docker-compose.prod.yml up -d --build" 