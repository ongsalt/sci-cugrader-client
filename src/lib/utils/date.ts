export function formatDateOnly(date: Date) {
    return date.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function formatTime(date: Date) {
    return date.toLocaleTimeString('en-UK', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

export function formatDate(date: Date) {
    return `${formatTime(date)} ${formatDateOnly(date)}`
}
