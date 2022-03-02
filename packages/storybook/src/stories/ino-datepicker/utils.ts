import '@inovex.de/elements';

export function registerInlineDatepickerHandler() {
  const group = document.querySelector(
    'ino-radio-group'
  ) as HTMLInoRadioGroupElement;
  const datepicker = document.querySelector(
    '.datepicker-group ino-datepicker'
  ) as HTMLInoDatepickerElement;

  const today = document.querySelector('.today');
  const thisWeek = document.querySelector('.thisWeek');
  const lastWeek = document.querySelector('.lastWeek');

  const todayClickHandler = () => {
    datepicker.value = '02.03.2020';
    datepicker.label = 'Am';
    group.value = 'at';
    datepicker.range = false;
  };

  const thisWeekClickHandler = () => {
    group.value = 'range';
    datepicker.label = 'Zeitraum';
    datepicker.range = true;
    datepicker.value = '02.03.2020 bis 08.03.2020';
  };

  const lastWeekClickHandler = () => {
    group.value = 'range';
    datepicker.label = 'Zeitraum';
    datepicker.range = true;
    datepicker.value = '24.02.2020 bis 01.03.2020';
  };

  const checkedChangeHandler = (e: CustomEvent<boolean>) => {
    const target = e.target as HTMLInoRadioElement;

    switch (target.value) {
      case 'at':
        datepicker.label = 'Am';
        datepicker.range = false;
        break;
      case 'after':
        datepicker.label = 'Ab';
        datepicker.range = false;
        if (group.value == 'range') {
          datepicker.value = datepicker.value.split(' - ').shift();
        }
        break;
      case 'before':
        datepicker.label = 'Bis';
        datepicker.range = false;
        if (group.value == 'range') {
          datepicker.value = datepicker.value.split(' - ').pop();
        }
        break;
      case 'range':
        datepicker.range = true;
        datepicker.label = 'Zeitraum';
        break;
    }
    group.value = target.value;
  };

  today.addEventListener('click', todayClickHandler);
  thisWeek.addEventListener('click', thisWeekClickHandler);
  lastWeek.addEventListener('click', lastWeekClickHandler);
  group.addEventListener('checkedChange', checkedChangeHandler);

  return () => {
    today.removeEventListener('click', todayClickHandler);
    thisWeek.removeEventListener('click', thisWeekClickHandler);
    lastWeek.removeEventListener('click', lastWeekClickHandler);
    group.removeEventListener('checkedChange', checkedChangeHandler);
  };
}
