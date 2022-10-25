package redis

import (
	"fmt"
	"mitsuki/settings"

	"github.com/go-redis/redis"
)

// 声明一个全局的rdb变量
var rdb *redis.Client

// Init ... 初始化连接
func Init(cfg *settings.RedisConfig) error {
	rdb = redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%d", cfg.Host, cfg.Port),
		Password: cfg.Password,
		DB:       cfg.DB,
		PoolSize: cfg.PoolSize,
	})

	if _, err := rdb.Ping().Result(); err != nil {
		return err
	}
	return nil
}

// Close ...
func Close() {
	_ = rdb.Close()
}
