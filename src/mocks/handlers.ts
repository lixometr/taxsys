import authMock from "./auth";
import agregatorsMock from "./agregators";
import userMock from "./user";
import balanceMock from "./balance";
import statsMock from "./stats";
import tripsMock from "./trips";
import paymentsMock from "./payments";
import antifraud from "./antifraud";
import paymentGroups from "./payment-groups";
import drivers from "./drivers";
import drvierCheck from "./driver-check";
import carsRentable from "./cars-rentable";
import suggestions from "./suggestions";
import car from "./car";
import driver from "./driver";
import cities from "./cities";
import moderateSuspicious from "./trips-moderate-suspicious";
import fines from "./fines";
import partnerApp from "./partner-app";
import geoIp from "./geoip";
import widgets from "./widgets";
import cards from "./cards";
import widget from "./widget";
import controlrooms from "./controlrooms";
import paysystems from "./paysystems";
import staff from "./staff";
export const handlers = [
  ...authMock,
  ...agregatorsMock,
  ...userMock,
  ...balanceMock,
  ...statsMock,
  ...tripsMock,
  ...paymentsMock,
  ...antifraud,
  ...paymentGroups,
  ...drivers,
  ...drvierCheck,
  ...carsRentable,
  ...suggestions,
  ...car,
  ...driver,
  ...cities,
  ...moderateSuspicious,
  ...fines,
  ...partnerApp,
  ...geoIp,
  ...cards,
  ...widgets,
  ...widget,
  ...controlrooms,
  ...paysystems,
  ...staff
];
