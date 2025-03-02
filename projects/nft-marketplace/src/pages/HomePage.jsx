import { NftSection } from '../components/marketPlace/NftSection';
import { MarketPlaceFilters } from '../components/marketPlace/MarketPlaceFilters';
import { MarketPlaceHeader } from '../components/marketPlace/MarketPlaceHeader';
import { MarketPlaceSubmenu } from '../components/marketPlace/MarketPlaceSubmenu';
import { LayoutContainer } from '../layout/LayoutContainer';

export function HomePage() {
  return (
    // add, delete, edit modal is within Navbar.jsx
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />
      <MarketPlaceFilters />
      {/* NftSection responsible for Nft cards */}
      <NftSection />
    </LayoutContainer>
  );
}
