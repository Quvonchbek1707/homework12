function calculateWorkingHours(dayStart, dayEnd) {
    const [startHours, startMinutes] = dayStart.split(":").map(Number);
    const [endHours, endMinutes] = dayEnd.split(":").map(Number);

    const startTime = startHours * 60 + startMinutes;
    const endTime = endHours * 60 + endMinutes;

    if (endTime < startTime) {
        return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas";
    }

    const workingMinutes = endTime - startTime;
    const hours = Math.floor(workingMinutes / 60);
    const minutes = workingMinutes % 60;

    return `Ish vaqti: ${hours} soat ${minutes} daqiqa`;
}
