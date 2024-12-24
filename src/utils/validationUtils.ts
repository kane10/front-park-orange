export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPlateNumber = (plate: string): boolean => {
  const plateRegex = /^RC \d{4} [A-Z]$/;
  return plateRegex.test(plate);
};

export const isValidChassisNumber = (chassis: string): boolean => {
  const chassisRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
  return chassisRegex.test(chassis);
};