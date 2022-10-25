package routers

import (
	"net/http"
	"time"

	"mitsuki/internal/middleware"
	"mitsuki/pkg/logger"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

// Setup ...
func Setup(mode string) *gin.Engine {
	// using code:  gin.SetMode(gin.ReleaseMode)
	gin.SetMode(mode)

	r := gin.New()

	// logger, recover, cors and ratelimite middlewares
	r.Use(logger.GinLogger(), logger.GinRecovery(true))

	v1 := r.Group("/api/v1")
	{
		// Beta cors and rate middlewares
		v1.GET("/middlewares", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"msg": "this is test the cores and rate middlewares",
			})
		},
			middleware.CorsMiddleware(),
			middleware.RateLimitMiddleware(time.Second*1, 1))
	}

	// get the / and show the app massage
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"msg":        "welcome to" + " " + viper.GetString("app.name"),
			"mode":       viper.GetString("app.mode"),
			"version":    viper.GetString("app.version"),
			"machine_id": viper.GetInt("app.machine_id"),
			"port":       viper.GetString("app.port"),
			"start_time": viper.GetString("app.start_time"),
		})
	})

	// adds handlers for NoRoute
	r.NoRoute(func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "404 Not Found",
			"tips": "you have get the no routers path",
		})
	})
	return r
}
