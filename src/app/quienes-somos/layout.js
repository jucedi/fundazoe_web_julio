// src/app/quienes-somos/layout.js
import SubNav from '@/components/SubNav';

export default function QuienesSomosLayout({ children }) {
  return (
    <div>
      <SubNav />
      <main>{children}</main>
    </div>
  );
}