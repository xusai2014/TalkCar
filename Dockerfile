FROM node:16-alpine3.15 as base-stage
WORKDIR /app
COPY . /app
ENV NEXT_TELEMETRY_DEBUG=1
# 中科大镜像源地址
#RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
#RUN apk --no-cache --virtual build-dependencies add python2 make g++
#RUN yarn config set python python2

RUN yarn global add pm2
RUN pm2 install pm2-logrotate \
  && pm2 set pm2-logrotate:max_size 50M \
  && pm2 set pm2-logrotate:retain 10
RUN yarn

#RUN apk del build-dependencies

RUN yarn run build
RUN rm -rf node_modules

FROM base-stage as prod-stage
WORKDIR /app
RUN yarn install --production

EXPOSE 80
ENTRYPOINT ["/bin/sh", "--", "./docker_entrypoint.sh"]
