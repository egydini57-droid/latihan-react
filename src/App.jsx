import KartuProfil from './components/KartuProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>Judul Halaman</h1>
      <KartuProfil nama="Egy Dini" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Azqiara" peran="Mahasiswa" tahun={2024} aktif={true} />
       <KartuProfil nama="Adella" peran="Mahasiswa" tahun={2024} aktif={true} />
    </main>
  );
}
