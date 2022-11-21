import { changeMode } from "./theme-conf.js";
import { autoSetBorders } from "./maximized.js";
import { statusMenuMain } from "./status-menu.js";

export function moduleMain() {
  changeMode(); // 明暗切换
  autoSetBorders(); // 窗口向下还原时增加边框
  statusMenuMain()
}
