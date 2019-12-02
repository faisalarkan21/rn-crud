import moment from 'moment';

export const ParsedDateInd = date =>
  date
    ? moment
        .utc(date)
        .lang('id')
        .format('MMM DD YYYY, HH:mm')
    : '';
