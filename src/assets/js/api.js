import {
  axiosUrl,
  config,
  config2,
  ENUM
} from './config';
import axios from 'axios';

const userToken = localStorage.getItem("userToken");
const gameId = sessionStorage.getItem("gameId");


class HTTP {
  // 进行抽奖
  lotteryDraw() {
    let params = {
      userToken: userToken,
      gameId: gameId,
      sceneType: "game",
      barcode: "游戏",
      lotteryChanne: localStorage.getItem("userLoginChannel")
    }
    return axios.post(axiosUrl + 'cloud2.activity.api/v8/market/drwaLottery/doActivityGameDrwaLottery.do', params, config).then((res) => {
      return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
    });
  }
  getUserInfo() {
    let params = {
      userToken: userToken
    }
    return axios.post(axiosUrl + 'cloud2.activity.api/gamePlatform/queryUserInfo.do', params, config)
      .then((res) => {
        return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
      });
  }
  // 加载游戏信息
  getGameInfo() {
    let params = {
      gameId: gameId
    }
    return axios.post(axiosUrl + 'cloud2.activity.api/v8/market/drwaLottery/getGameSettings.do', params, config)
      .then((res) => {
        return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
      });
  }
  // 获取游戏列表
  getGameList() {
    return axios.post(axiosUrl + 'cloud2.activity.api/gamePlatform/queryGameList.do')
      .then((res) => {
        return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
      });
  }
}

const API = new HTTP();

export default API;