import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="text-wrapper">Відгуки</div>

        <div className="cards">
          <div className="customer-quote">
            <div className="text-wrapper-2">“Найкращий садок!”</div>

            <div className="avatar">
              <img
                className="img"
                alt="Avatar"
                src="https://c.animaapp.com/maveqlo1qX2LT2/img/avatar-1.svg"
              />

              <div className="frame">
                <div className="text-wrapper-3">Ім’я</div>

                <div className="text-wrapper-4">Опис</div>
              </div>
            </div>
          </div>

          <div className="customer-quote-2">
            <div className="text-wrapper-2">“Дякую!!!!”</div>

            <div className="avatar">
              <img
                className="img"
                alt="Avatar"
                src="https://c.animaapp.com/maveqlo1qX2LT2/img/avatar-2.svg"
              />

              <div className="frame">
                <div className="text-wrapper-3">Ім’я</div>

                <div className="text-wrapper-4">Опис</div>
              </div>
            </div>
          </div>

          <div className="customer-quote-3">
            <div className="text-wrapper-2">“Дуже задоволена!”</div>

            <div className="avatar">
              <img
                className="img"
                alt="Avatar"
                src="https://c.animaapp.com/maveqlo1qX2LT2/img/avatar.svg"
              />

              <div className="frame">
                <div className="text-wrapper-3">Ім’я</div>

                <div className="text-wrapper-4">Опис</div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-footer">
          <div className="items">
            <div className="text-wrapper-5">Головна</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-5">Про нас</div>
          </div>

          <div className="text-wrapper-6">Happy kids world</div>

          <div className="social-icons">
            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://c.animaapp.com/maveqlo1qX2LT2/img/icon-3.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-3"
                  alt="Icon"
                  src="https://c.animaapp.com/maveqlo1qX2LT2/img/icon-2.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-4"
                  alt="Icon"
                  src="https://c.animaapp.com/maveqlo1qX2LT2/img/icon-1.svg"
                />
              </div>
            </div>

            <div className="buttons-icon">
              <div className="icon">
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://c.animaapp.com/maveqlo1qX2LT2/img/icon.svg"
                />
              </div>
            </div>
          </div>

          <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/maveqlo1qX2LT2/img/divider.svg"
          />
        </div>

        <div className="navigation">
          <div className="items-2">
            <div className="text-wrapper-7">Головна</div>

            <div className="text-wrapper-7">Персонал</div>

            <div className="text-wrapper-7">Про нас</div>

            <button className="button">
              <div className="text-wrapper-8">Контактна інформація</div>
            </button>
          </div>

          <img
            className="happy-kids-world"
            alt="Happy kids world"
            src="https://c.animaapp.com/maveqlo1qX2LT2/img/happy-kids-world.png"
          />
        </div>

        <div className="copy">
          <div className="text-wrapper-9">Детальніше про нас</div>

          <p className="p">
            Найкраще місце для вашої дитини у колі професійних педагогів.
          </p>

          <div className="buttons">
            <button className="button-2">
              <div className="text-wrapper-10">Перейти</div>
            </button>
          </div>
        </div>

        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/maveqlo1qX2LT2/img/image-8.png"
        />

        <img
          className="image-2"
          alt="Image"
          src="https://c.animaapp.com/maveqlo1qX2LT2/img/image-9.png"
        />

        <img
          className="image-3"
          alt="Image"
          src="https://c.animaapp.com/maveqlo1qX2LT2/img/image-5.png"
        />

        <img
          className="image-4"
          alt="Image"
          src="https://c.animaapp.com/maveqlo1qX2LT2/img/image-6.png"
        />
      </div>
    </div>
  );
};
