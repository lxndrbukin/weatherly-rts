import { ChangeEventHandler } from 'react';

export type HeaderProps = {
  setSearch: Function;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

export type HeaderState = {
  search: string;
};
