export function withStyle(child, index) {
  const style: any = {};
  if (child.level === 2) {
    switch (index) {
      case 0: {
        style.left = -400 + 'px';
        style.transform = 'translateX(-100%)';

        break;
      }
      case 1: {
        style.left = 0;
        style.transform = 'translateX(0)';

        break;
      }
      case 2: {
        style.left = 400 + 'px';
        style.transform = 'translateX(100%)';

        break;
      }
    }
  } else if (child.level === 3) {
    switch (child.id) {
      case '3-1': {
        style.left = -50 + 'px';
        style.transform = 'translateX(-100%)';

        break;
      }
      case '3-2': {
        style.left = 150 + 'px';
        style.transform = 'translateX(0)';

        break;
      }
      case '3-3': {
        style.left = -150 + 'px';
        style.transform = 'translateX(0)';

        break;
      }
      case '3-4': {
        style.left = 150 + 'px';
        style.transform = 'translateX(0)';

        break;
      }
      case '3-5': {
        style.left = -150 + 'px';
        style.transform = 'translateX(0)';

        break;
      }
      case '3-6': {
        style.left = 150 + 'px';
        style.transform = 'translateX(0)';

        break;
      }
    }
  }

  return style;
}
