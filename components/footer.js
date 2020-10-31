import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-centermb-10 lg:mb-0">
            Cand arunci cu rahat si rahatul sare inapoi.
          </h3>
        </div>
      </Container>
    </footer>
  )
}
