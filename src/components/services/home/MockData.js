export const doctorsMock = [
  { id: "doctorA", name: "Bác sĩ A", specialty: "Thú y" },
  { id: "doctorB", name: "Bác sĩ B", specialty: "Chăm sóc cá Koi" },
  {
    id: "autoAssign",
    name: "Tự động phân công",
    specialty: "Tự động chọn bác sĩ",
  },
];

export const timeSlotsMock = {
  doctorA: ["08:00 - 09:00", "09:00 - 10:00"],
  doctorB: ["10:00 - 11:00", "11:00 - 12:00"],
  autoAssign: ["08:00 - 09:00", "09:00 - 10:00"],
};
