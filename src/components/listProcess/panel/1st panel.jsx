import React from "react";
import clock from "../../../IMG/Clock.png";
import closeClock from "../../../IMG/hours have passed.png";
import loader from ".././../../IMG/loader.svg";
import human from "../../../IMG/human.png";
import scense from "../../../IMG/Scense.png";
import style from "./../ListProcess.module.css";
import { NavLink } from "react-router-dom";
import vector from "./../../../IMG/Vector (Stroke).png";

const Panel_one = (props) => {
  return (
    <div className={style.panel}>
      <div className={style.name_panel}>
        <span className={style.name_credit}>{props.props.title}</span>
        <NavLink to="#?" className={style.name_process}>
          На карту процесса
          <img src={vector} alt="vector" className={style.vector} />
        </NavLink>
      </div>

      <hr />
      <div className={style.items}>
        <div className={style.item_content_refresh}>
          <i className={style.btn}>
            <img src={loader} alt="loader" />
          </i>
          <div className={style.number}>{props.props.completed}</div>
        </div>
        <div className={style.item_time_credss}>выполнено раз</div>
      </div>

      <div className={style.items}>
        <div className={style.item_content_time}>
          <div className={style.clock}>
            <i className={style.img_all}>
              <img src={clock} alt="clock" />
            </i>
            <span className={style.time}>{props.props.executionTime}</span>
            <div className={style.item_time_cred}>среднее время выполнения</div>
          </div>
          <div className={style.close_clock}>
            <i className={style.img_all}>
              <img src={closeClock} alt="closeClock" />
            </i>
            <span className={style.time}>{props.props.activeTime}</span>
            <div className={style.item_time_cred}>среднее активное время</div>
          </div>
        </div>
      </div>

      <div className={style.items}>
        <div className={style.item_content_time}>
          <div>
            <i className={style.img_all}>
              <img src={human} alt="human" />
            </i>
            <span className={style.time}>{props.props.employeesInProcess} сотрудников</span>
            <div className={style.item_time_cred}>участвует в процессе</div>

            <div>
              <i className={style.img_all}>
                <img src={scense} alt="scense" />
              </i>
              <span className={style.time}>{props.props.scriptsInProcess} сценариев</span>
              <div className={style.item_time_cred}>в процессе</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.items} ${style.item_end}`}>
        <div className={style.item_content_time}>
          <div className={style.dates}>
            <div className={style.content_date}>
              <span className={style.message_data}>Начало</span>
              <span className={style.datas}>{props.props.start}</span>
            </div>
            <div className={style.content_date}>
              <span className={style.message_data}>Окончание</span>
              <span className={style.datas}>{props.props.end}</span>
            </div>
            <div className={style.content_date}>
              <span className={style.message_data}>Загрузка</span>
              <span className={style.datas}>{props.props.loading}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Panel_one;
