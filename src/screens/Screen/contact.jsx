import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="copy">
          <div className="text-wrapper">Про нас</div>

          <p className="p">Найкраще місце для вашого малюка</p>

          <p className="paragraph">
            Дитячий садок Happy Kids World створює безпечне та радісне
            середовище, де кожна дитина отримує індивідуальну увагу та
            підтримку. Наша команда досвідчених педагогів використовує
            інноваційні методики навчання через гру, сприяючи розвитку
            творчості, самостійності та соціальних навичок. Ми прагнемо
            виховувати впевненість у собі, повагу до інших та любов до пізнання,
            створюючи комфортну атмосферу, де кожен маленький учень відчуває
            себе важливим і коханим.
          </p>
        </div>

        <div className="form">
          <div className="input">
            <div className="text-wrapper-2">Ім’я</div>

            <div className="field">
              <div className="label">Іван</div>
            </div>
          </div>

          <div className="input-2">
            <div className="text-wrapper-2">Прізвище</div>

            <div className="field">
              <div className="label">Пашкевич</div>
            </div>
          </div>

          <div className="input-3">
            <div className="text-wrapper-2">Пошта</div>

            <input
              className="label-wrapper"
              placeholder="email@janesfakedomain.net"
              type="email"
            />
          </div>

          <div className="input-4">
            <div className="text-wrapper-2">Ваше повідомлення</div>

            <div className="field">
              <div className="label">Введіть ваше повідомлення</div>
            </div>
          </div>

          <button className="button">
            <div className="text-wrapper-3">Відправити</div>
          </button>
        </div>

        <div className="heading">
          <div className="text-wrapper-4">Контактна форма</div>
        </div>

        <div className="navigation">
          <div className="items">
            <div className="text-wrapper-5">Головна</div>

            <div className="text-wrapper-5">Персонал</div>

            <div className="text-wrapper-5">Про нас</div>

            <button className="div-wrapper">
              <div className="text-wrapper-6">Контактна інформація</div>
            </button>
          </div>

          <img
            className="happy-kids-world"
            alt="Happy kids world"
            src="https://c.animaapp.com/mavfjnrwws9cNA/img/happy-kids-world.png"
          />
        </div>

        <div className="navigation-footer">
          <div className="items-2">
            <div className="text-wrapper-2">Головна</div>
          </div>

          <div className="items-3">
            <div className="text-wrapper-2">Про нас</div>
          </div>

          <div className="text-wrapper-7">Happy kids world</div>

          <div className="social-icons">
            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="img"
                  alt="Icon"
                  src="https://c.animaapp.com/mavfjnrwws9cNA/img/icon-2.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://c.animaapp.com/mavfjnrwws9cNA/img/icon-1.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-3"
                  alt="Icon"
                  src="https://c.animaapp.com/mavfjnrwws9cNA/img/icon-3.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="img"
                  alt="Icon"
                  src="https://c.animaapp.com/mavfjnrwws9cNA/img/icon.svg"
                />
              </div>
            </div>
          </div>

          <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/mavfjnrwws9cNA/img/divider.svg"
          />
        </div>

        <img
          className="assets-task"
          alt="Assets task"
          src="https://c.animaapp.com/mavfjnrwws9cNA/img/assets-task-01jqgse39zf2crhrve1a0ffatk-img-1-1.png"
        />

        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/mavfjnrwws9cNA/img/image-4.png"
        />

        <div className="text-wrapper-8">Вул. Лісова, буд. 35</div>
      </div>
    </div>
  );
};
