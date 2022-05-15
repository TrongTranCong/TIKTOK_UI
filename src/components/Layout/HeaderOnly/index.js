import React from 'react';
import Upload from '../../../pages/Upload';
import Header from '../../Layout/components/Header';
export default function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <Upload />
            </div>
        </div>
    );
}
