import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 30px;
  background: #e8e8e8;
  text-align: center;
  ////position: relative;
  & .img img {
    margin-right: 30px;
    /*   max-width: 444px;
    max-height: 964px;
    width: 100%;
    height: 100%; */
  }
  @media (max-width: 1150px) {
    & .img img {
      display: none;
    }
  }
  & .body {
    height: 964px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 24px;

    & .get_approved {
      & .auto_loan_online_result_not_found {
        max-width: 187px !important;
        margin-left: 36%;
        max-width: 227px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 13px 20px;
        border: 1px solid #ff2424;
        border-radius: 24px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        //font-family: "Circular Std", sans-serif;
        font-family: "Circular-std";
        @media (max-width: 700px) {
          margin-left: 33%;
          width: 100%;
        }
        @media (max-width: 650px) {
          margin-left: 32%;
          width: 100%;
        }
        @media (max-width: 550px) {
          margin-left: 30%;
          width: 100%;
        }
        @media (max-width: 500px) {
          margin-left: 24.5%;
          width: 100%;
        }
        @media (max-width: 450px) {
          margin-left: 22%;
          width: 100%;
        }
        @media (max-width: 380px) {
          margin-left: 17%;
          max-width: 100%;
        }
        /*  @media (max-width: 370px) {
          margin-left: 16.5%;
          width: 100%;
        } */
        @media (max-width: 360px) {
          margin-left: 16%;
          width: 100%;
        }
        @media (max-width: 340px) {
          margin-left: 15%;
          width: 100%;
        }
        & img {
          margin-right: 10px;
        }

        & .span_not_found {
          margin: 0;
          text-transform: uppercase;
          color: #ff2424;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }
      }
      & .auto_loan_online_result {
        max-width: 187px !important;
        margin-left: 36%;
        max-width: 227px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 13px 20px;
        border: 1px solid #4447e7;
        border-radius: 24px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        //font-family: "Circular Std", sans-serif;
        font-family: "Circular-std";
        @media (max-width: 700px) {
          margin-left: 33%;
          width: 100%;
        }
        @media (max-width: 650px) {
          margin-left: 32%;
          width: 100%;
        }
        @media (max-width: 550px) {
          margin-left: 30%;
          width: 100%;
        }
        @media (max-width: 500px) {
          margin-left: 24.5%;
          width: 100%;
        }
        @media (max-width: 450px) {
          margin-left: 22%;
          width: 100%;
        }
        @media (max-width: 380px) {
          margin-left: 17%;
          max-width: 100%;
        }
        /*  @media (max-width: 370px) {
          margin-left: 16.5%;
          width: 100%;
        } */
        @media (max-width: 360px) {
          margin-left: 16%;
          width: 100%;
        }
        @media (max-width: 340px) {
          margin-left: 15%;
          width: 100%;
        }
        & img {
          margin-right: 10px;
        }
        & .span {
          margin: 0;
          text-transform: uppercase;
          color: #4447e7;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }
        & .span_not_found {
          margin: 0;
          text-transform: uppercase;
          color: #ff2424;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }
      }
      & .auto_loan_online {
        max-width: 186px !important;
        margin-left: 34%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 13px 20px;
        border: 1px solid #4447e7;
        border-radius: 24px;
        align-items: center;
        text-align: center;
        font-weight: 500;
        align-items: center;
        font-size: 14px;
        line-height: 18px;
        font-family: "Circular-std";
        //font-family: "Circular Std", sans-serif;
        @media (max-width: 700px) {
          margin-left: 32%;
          width: 100%;
        }
        @media (max-width: 550px) {
          margin-left: 30%;
          width: 100%;
        }
        @media (max-width: 500px) {
          margin-left: 24%;
          width: 100%;
        }
        @media (max-width: 450px) {
          margin-left: 19%;
          width: 100%;
        }
        @media (max-width: 410px) {
          margin-left: 16%;
          width: 100%;
        }
        @media (max-width: 380px) {
          margin-left: 17%;
          max-width: 100%;
        }
        @media (max-width: 370px) {
          margin-left: 16.5%;
          width: 100%;
        }
        @media (max-width: 360px) {
          margin-left: 15%;
          width: 100%;
        }
        @media (max-width: 340px) {
          margin-left: 15%;
          width: 100%;
        }
        & img {
          margin-right: 10px;
        }
        & .span {
          margin: 0;
          text-transform: uppercase;
          color: #4447e7;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }
      }
      & .title {
        color: #0b0c37;
        font-weight: 500;
        font-size: 48px;
        line-height: 130%;
        margin: 24px 0px 16px 0px;
        @media (max-width: 450px) {
          font-size: 38px;
        }
      }
      & .spann {
        color: #0b0c37;
        font-weight: 450;
        font-size: 20px;
        line-height: 150%;
        opacity: 0.6;
        display: block;
        width: 70%;
        margin-left: 16%;
        margin-bottom: 36px;
        @media (max-width: 450px) {
          font-size: 15px;
        }
      }
      & .get_button {
        margin-left: 35%;
        align-items: center;
        display: flex;
        text-align: center;
        justify-content: center;
        padding: 18.5px 27px;
        max-width: 227px !important;
        background: #4447e7;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        text-align: center;

        @media (max-width: 700px) {
          margin-left: 32%;
          width: 100%;
        }
        @media (max-width: 550px) {
          margin-left: 30%;
          width: 100%;
        }
        @media (max-width: 500px) {
          margin-left: 24%;
          width: 100%;
        }
        @media (max-width: 450px) {
          margin-left: 19%;
          width: 100%;
        }
        @media (max-width: 410px) {
          margin-left: 17%;
          width: 100%;
        }
        @media (max-width: 380px) {
          margin-left: 17%;
          max-width: 100%;
        }
        /*  @media (max-width: 370px) {
          margin-left: 16.5%;
          width: 100%;
        } */
        @media (max-width: 360px) {
          margin-left: 15%;
          width: 100%;
        }
        @media (max-width: 340px) {
          margin-left: 15%;
          width: 100%;
        }
        & .get_button_p {
          font-family: "Circular-Std";
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          color: #ffffff;
          margin: 0;
          font-family: "Circular-std";
          opacity: 1;
          margin-right: 10px;
        }

        & span :hover {
          & ::after {
            transition: all 0.3s ease;
          }
          & img :hover {
            transition: all 0.3s ease;
          }
        }
      }
      & .get_button_ntf {
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 19px 32px;
        background: #4447e7;
        border-radius: 10px;
        font-weight: 500;
        font-family: "Circular-std";
        font-size: 18px;
        line-height: 23px;

        letter-spacing: 1px;
        border: none;
        color: #ffffff;
        margin-left: 8%;

        cursor: pointer;
      }
      & .get_button_result {
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 19px 32px;
        background: #4447e7;
        border-radius: 10px;
        font-weight: 500;
        font-family: "Circular-std";
        font-size: 18px;
        line-height: 23px;

        letter-spacing: 1px;
        border: none;
        color: #ffffff;
        margin-left: 4%;

        cursor: pointer;
      }
    }

    & .approved {
      // padding: 150px 173px;
      display: block;
      & .steps {
        display: flex;
        margin-bottom: 43px;
        & .active {
          display: flex;
          align-items: center;
          & span {
            margin-right: 12px;
            max-width: 40px;
            max-height: 40px;
            background: #4447e7;
            text-align: center;
            align-items: center;
            padding: 10px 16px;
            border-radius: 50%;
            color: white;
          }

          & img {
            margin-right: 24px;
            margin-left: 24px;
            @media (max-width: 600px) {
              margin-right: 15px;
              margin-left: 15px;
            }
          }
          @media (max-width: 600px) {
            padding-left: 10px;
          }
        }
        & .step {
          display: flex;
          align-items: center;
          & span {
            margin-right: 12px;
            max-width: 40px;
            max-height: 40px;
            background: #f8f8f8;
            text-align: center;
            align-items: center;
            padding: 10px 15px;
            border-radius: 50%;
            color: #8f93a7;
            border: 1px solid #e3e3e3;
          }
          & img {
            margin-right: 12px;
          }
          & .arrow {
            & img {
              margin-right: 24px;
              margin-left: 24px;
              @media (max-width: 600px) {
                margin-right: 15px;
                margin-left: 15px;
              }
            }
          }
          @media (max-width: 600px) {
            padding-left: 10px;
          }
          & p {
            color: #8f93a7;
          }
        }
        @media (max-width: 600px) {
          display: block;
          text-align: center;
        }
      }
      & .steps_text {
        min-height: 521px;
        text-align: left;
        & h4 {
          color: #090a52;
          font-weight: 500;
          font-size: 32px;
          line-height: 130%;
          margin-bottom: 17px;
          @media (max-width: 580px) {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
        & span {
          color: #727391;
          font-weight: 450;
          font-size: 16px;
          line-height: 130%;

          & b {
            text-transform: uppercase;
            color: black;
            font-weight: 450;
            font-size: 13px;
            line-height: 130%;
            padding: 3px 8px;
            background: #ffe27d;
            border-radius: 5.44643px;
          }
          @media (max-width: 580px) {
            margin-left: 10px;
            margin-right: 10px;
            font-size: 16px;
          }
        }

        & .step_1-input {
          display: flex;
          justify-content: space-between;
          padding: 15px 24px;
          border: 1px solid #4447e7;
          border-radius: 12px;
          margin-top: 32px;
          & .car {
            display: flex;
            align-items: center;
            & img {
              margin-right: 16px;
            }
            & p {
              margin: 0;
            }
          }
          @media (max-width: 580px) {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
        & .inputs {
          margin-top: 32px;
          max-width: 545px;
          & .create {
            display: flex;
            width: 100%;
            & .input_target {
              width: 100%;
              margin-bottom: 16px;
              position: relative;
              & .error {
                border: 1px solid #ff2424;
              }
              & select {
                min-width: 565px;
                min-height: 54px;
              }
              & .dateP {
                /*  width: 15px;
                height: 24px; */
                position: absolute;
                bottom: -55px;
                right: 3px;
                margin: 0;
                opacity: 0;
              }

              & input,
              & select {
                height: 54px;
                background: #ffffff;
                border: 1px solid #e3e3e3;
                border-radius: 12px;
                margin-top: 8px;
                outline: none;
                width: 100%;
                font-weight: 450;
                font-size: 16px;
                line-height: 20px;
                font-family: "Circular-std";
                padding-left: 16px;
                :hover {
                  border: 1px solid #4447e7;
                }
                :focus {
                  border: 1px solid #4447e7;
                }
                :filled {
                  border: 1px solid #e3e3e3;
                }
                :active {
                  border: 1px solid #4447e7;
                }
              }
              & .imgg {
                & .input_d {
                  position: absolute;
                  width: 25px;
                  height: 25px;
                  right: 2px;
                  bottom: 15px;
                  z-index: 9999999;
                  opacity: 0;
                }
                & img {
                  position: absolute;
                  bottom: 18px;
                  right: 6px;
                  margin: 0;
                }
              }
              & .imggg {
                img {
                  position: absolute;
                  bottom: 37px;
                  right: 6px;
                  margin: 0;
                }
              }
              .errs {
                font-size: 12px;
                line-height: 14px;
                width: 100%;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 450;
                font-family: "Circular-Std";
                color: red;
                & > div {
                  margin: 8px;
                }
              }
              & .labels {
                display: flex;
                justify-content: space-between;
                align-items: center;
                & label {
                  font-weight: 450;
                  font-size: 14px;
                  line-height: 18px;

                  & span {
                    color: red;
                  }
                }
                & label:nth-child(2) {
                  font-weight: 450;
                  font-size: 14px;
                  line-height: 18px;
                  color: #ff2424;
                }
              }
              & input {
                width: 100%;
              }
            }
            & .input_target:nth-child(2) {
              margin-left: 32px;
            }
            @media (max-width: 600px) {
              // display: block;
              width: 97.5%;
            }
          }
        }
      }
      & .buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        & button {
          text-transform: uppercase;
          padding: 20px 30px;
          border-radius: 10px;
          border: none;
          min-width: 145px;
          font-weight: 500;
          font-family: "Circular-Std";
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 1px;
          cursor: pointer;
          @media (max-width: 700px) {
            padding: 20px;
          }
        }
        & .previuos {
          color: #8f93a7;
          background: #f8f8f8;
          border: 1px solid #f8f8f8;
          :hover {
            border: 1px solid #1518ab;
          }
          :focus {
            border: 1px dashed #1518ab;
          }
        }
        & .next {
          color: white;
          background: #4447e7;
          // background: #E3E3E3
          :hover {
            background: #1518ab;
          }
          :focus {
            background-color: #1518ab;
          }
        }
        /*  & .nextE{
          background: #E3E3E3;
          color: #F8F8F8;
          cursor: no-drop;
        } */
      }
    }
    @media (max-width: 1300px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 700px) {
    padding: 8px;
    background: white;
  }
`;
