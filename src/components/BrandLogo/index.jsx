import { brand } from '../../data/brand';
import './BrandLogo.css';

function BrandLogo({ small = false }) {
  return (
    <div className={`brand-logo ${small ? 'brand-logo--small' : ''}`}>
      <span>{brand.firstLine}</span>
      <strong>{brand.highlightName}</strong>
      <small>{brand.subtitle}</small>
    </div>
  );
}

export default BrandLogo;