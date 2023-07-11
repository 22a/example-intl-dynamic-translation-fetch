export default {
  time: {
    hhmmss: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
  },
  date: {
    hhmmss: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    timeInHour: {
      hour: 'numeric',
      hour12: true,
    },
    dateWithMonth: {
      day: 'numeric',
      month: 'short',
    },
    onlyMonth: {
      month: 'short',
    },
    onlyYear: {
      year: 'numeric',
    },
    dayWithMonth: {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    },
    dayWithMonthAndTime: {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    debugUtcDateAndTime: {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
      timeZoneName: 'short',
    },
  },
  number: {
    compact: { notation: 'compact' },
    EUR: {
      style: 'currency',
      currency: 'EUR',
    },
    USD: {
      style: 'currency',
      currency: 'USD',
    },
    USDwithoutCents: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    },
    USDwithCents: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
  relativeTime: {
    default: {
      style: 'long',
      withSuffix: true,
    },
    sla: {
      style: 'narrow',
      withSuffix: false,
      thresholds: {
        ss: 10,
      },
    },
  },
};
