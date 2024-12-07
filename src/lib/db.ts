import { PrismaClient } from '@prisma/client';

if (process.env.CURRENT_ENV == 'production') {
const prisma = new PrismaClient();
} else {
if (!global.prisma) {
global.prisma = new PrismaClient();
}
prisma = global.prisma;
}
export default prisma;