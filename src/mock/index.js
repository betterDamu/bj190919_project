import Mock from "mockjs";
import data from "./data";

//拦截ajax请求
Mock.mock("/api/sellers",data.sellers);
Mock.mock("/api/goods",data.goods);
Mock.mock("/api/ratings",data.ratings);