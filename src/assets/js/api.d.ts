import { AnyMxRecord } from "dns";

// Type definitions for ./src/assets/js/api.js

/**
 * 
 */
declare interface HTTP {

	/**
	 * 
	 */
	new(): any;

	/**
	 * 进行抽奖
	 */
	lotteryDraw(): any;

	/**
	 * 
	 */
	getUserInfo(): any;

	/**
	 * 加载游戏信息
	 */
	getGameInfo(): any;

	/**
	 * 获取游戏列表
	 */
	getGameList(): any;
}

/**
 * 
 */
export declare var API: HTTP;
