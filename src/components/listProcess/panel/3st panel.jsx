import React from "react";
import clock from "../../../IMG/Clock.png";
import closeClock from "../../../IMG/hours have passed.png";
import loader from ".././../../IMG/loader.svg";
import human from "../../../IMG/human.png";
import scense from "../../../IMG/Scense.png";
import style from "./../ListProcess.module.css";
import { NavLink } from "react-router-dom";
import vector from "./../../../IMG/Vector (Stroke).png";

const Panel_three = (props) => {
  return (
    <div className={style.panel}>
      <div className={style.name_panel}>
        <span className={style.name_credit}>Оформление страховых премий</span>
        <NavLink to="#?" className={style.name_process}>
          На карту процесса{" "}
          <img src={vector} alt="vector" className={style.vector} />
        </NavLink>
      </div>

      <hr />
      <div className={style.items}>
        <div className={style.item_content_refresh}>
          <i className={style.btn}>
            <img src={loader} />
          </i>
          <div className={style.number}>340 487</div>
        </div>
        <div className={style.item_time_credss}>выполнено раз</div>
      </div>

      <div className={style.items}>
        <div className={style.item_content_time}>
          <div className={style.clock}>
            <i className={style.img_all}>
              <img src={clock} />
            </i>
            <span className={style.time}>76 ч 47 мин</span>
            <div className={style.item_time_cred}>среднее время выполнения</div>
          </div>
          <div className={style.close_clock}>
            <i className={style.img_all}>
              <img src={closeClock} />
            </i>

            <span className={style.time}>1ч 7 мин(10,5%)</span>
            <div className={style.item_time_cred}>среднее активное время</div>
          </div>
        </div>
      </div>

      <div className={style.items}>
        <div className={style.item_content_time}>
          <div>
            <i className={style.img_all}>
              <img src={human} />
            </i>
            <span className={style.time}>53 сотрудника</span>
            <div className={style.item_time_cred}>участвует в процессе</div>

            <div>
              <i className={style.img_all}>
                <img src={scense} />
              </i>
              <span className={style.time}>129 сценариев</span>
              <div className={style.item_time_cred}>в процессе</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.items} ${style.item_end}`}>
        <div className={style.item_content_time}>
          <div className={style.dates}>
            <div className={style.content_date}>
              <span className={style.message_data}>начало</span>
              <span className={style.datas}>11 ноября 2017</span>
            </div>
            <div className={style.content_date}>
              <span className={style.message_data}>окончание</span>
              <span className={style.datas}>6 января 2018</span>
            </div>
            <div className={style.content_date}>
              <span className={style.message_data}>загрузка</span>
              <span className={style.datas}>10 января 2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel_three;
