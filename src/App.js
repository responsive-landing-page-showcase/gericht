import { Route, Routes } from 'react-router-dom';
import Global from './Global';
import { About, Awards, BookTable, Contact, Home, Login, Menu, PageNotFound } from './Page';

const App = () => (
    <>
        <Global />
        <Routes>
            <Route path="/gericht" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/gericht/about" element={<About />} />
            <Route path="/gericht/menu" element={<Menu />} />
            <Route path="/gericht/awards" element={<Awards />} />
            <Route path="/gericht/contact" element={<Contact />} />
            <Route path="/gericht/login" element={<Login />} />
            <Route path="/gericht/bookTable" element={<BookTable />} />
            <Route path="/gericht/*" element={<PageNotFound />} />
        </Routes>
    </>
);

export default App;
