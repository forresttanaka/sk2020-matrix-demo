import React from 'react';
import DataTable from './datatable';
import './App.css';


const matrixContext = {
    x: {
        group_by: 'assay_title',
        label: 'Assay',
        doc_count: 52,
        assay_title: {
            buckets: [
                {
                    key: 'Histone ChIP-seq',
                    doc_count: 8,
                },
                {
                    key: 'TF ChIP-seq',
                    doc_count: 8,
                },
                {
                    key: 'DNase-seq',
                    doc_count: 6,
                },
                {
                    key: 'total RNA-seq',
                    doc_count: 5,
                },
                {
                    key: 'DNAme array',
                    doc_count: 4,
                },
                {
                    key: 'Control ChIP-seq',
                    doc_count: 3,
                },
                {
                    key: 'Repli-seq',
                    doc_count: 3,
                },
                {
                    key: '5C',
                    doc_count: 1,
                },
                {
                    key: 'ATAC-seq',
                    doc_count: 1,
                },
                {
                    key: 'Hi-C',
                    doc_count: 1,
                },
                {
                    key: 'PLAC-seq',
                    doc_count: 1,
                },
                {
                    key: 'PRO-cap',
                    doc_count: 1,
                },
                {
                    key: 'RAMPAGE',
                    doc_count: 1,
                },
                {
                    key: 'RNA Bind-n-Seq',
                    doc_count: 1,
                },
                {
                    key: 'RNA-seq',
                    doc_count: 1,
                },
                {
                    key: 'RRBS',
                    doc_count: 1,
                },
                {
                    key: 'WGBS',
                    doc_count: 1,
                },
                {
                    key: 'icLASER',
                    doc_count: 1,
                },
                {
                    key: 'long read RNA-seq',
                    doc_count: 1,
                },
                {
                    key: 'microRNA-seq',
                    doc_count: 1,
                },
                {
                    key: 'polyA plus RNA-seq',
                    doc_count: 1,
                },
                {
                    key: 'shRNA RNA-seq',
                    doc_count: 1,
                },
            ],
        },
    },
    y: {
        group_by: [
            'biosample_ontology.classification',
            'biosample_ontology.term_name',
        ],
        label: 'Biosample',
        doc_count: 52,
        'biosample_ontology.classification': {
            buckets: [
                {
                    key: 'cell line',
                    doc_count: 34,
                    'biosample_ontology.term_name': {
                        buckets: [
                            {
                                key: 'K562',
                                doc_count: 17,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'Histone ChIP-seq',
                                            doc_count: 6,
                                        },
                                        {
                                            key: 'total RNA-seq',
                                            doc_count: 3,
                                        },
                                        {
                                            key: 'Control ChIP-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'DNase-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'PRO-cap',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'RAMPAGE',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'RRBS',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'WGBS',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'polyA plus RNA-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'shRNA RNA-seq',
                                            doc_count: 1,
                                        },
                                    ]
                                }
                            },
                            {
                                key: 'A549',
                                doc_count: 6,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'TF ChIP-seq',
                                            doc_count: 5,
                                        },
                                        {
                                            key: '5C',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'SK-N-SH',
                                doc_count: 4,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'Repli-seq',
                                            doc_count: 3,
                                        },
                                        {
                                            key: 'icLASER',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'CH12.LX cell',
                                doc_count: 3,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'Histone ChIP-seq',
                                            doc_count: 2,
                                        },
                                        {
                                            key: 'Control ChIP-seq',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'GM12878',
                                doc_count: 3,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'ATAC-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'Control ChIP-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'TF ChIP-seq',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'MCF-7',
                                doc_count: 1,
                                assay_title: {
                                    buckets: [
                                        {
                                            'key': 'TF ChIP-seq',
                                            'doc_count': 1,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    key: 'tissue',
                    doc_count: 9,
                    'biosample_ontology.term_name': {
                        buckets: [
                            {
                                key: 'midbrain',
                                doc_count: 9,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'DNase-seq',
                                            doc_count: 5,
                                        },
                                        {
                                            key: 'PLAC-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'TF ChIP-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'long read RNA-seq',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'microRNA-seq',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    key: 'primary cell',
                    doc_count: 4,
                    'biosample_ontology.term_name': {
                        buckets: [
                            {
                                key: 'basal cell of epithelium of terminal bronchiole',
                                doc_count: 4,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'DNAme array',
                                            doc_count: 4,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    key: 'whole organisms',
                    doc_count: 3,
                    'biosample_ontology.term_name': {
                        buckets: [
                            {
                                key: 'multi-cellular organism',
                                doc_count: 3,
                                assay_title: {
                                    'buckets': [
                                        {
                                            'key': 'total RNA-seq',
                                            'doc_count': 2,
                                        },
                                        {
                                            'key': 'RNA-seq',
                                            'doc_count': 1,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    key: 'cell-free sample',
                    doc_count: 2,
                    'biosample_ontology.term_name': {
                        buckets: [
                            {
                                key: 'cell-free sample',
                                doc_count: 2,
                                assay_title: {
                                    buckets: [
                                        {
                                            key: 'Hi-C',
                                            doc_count: 1,
                                        },
                                        {
                                            key: 'RNA Bind-n-Seq',
                                            doc_count: 1,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
};


const convertMatrixToDataTable = (matrix) => {
    const tableData = {
        rows: [],
        tableCss: 'matrix',
    };

    // Make header row.
    const colCategory = matrix.x.group_by;
    const headerData = matrix.x[colCategory].buckets.map((bucket) => bucket.key);
    tableData.rows.push([null].concat(headerData));

    // Make data rows.
    const rowCategory = matrix.y.group_by[0];
    const rowSubcategory = matrix.y.group_by[1];
    matrix.y[rowCategory].buckets.forEach((rowCategoryBucket) => {
        tableData.rows.push([{ content: rowCategoryBucket.key, style: { fontWeight: 'bold' }, colSpan: matrix.x[colCategory].buckets.length + 1 }]);
        rowCategoryBucket[rowSubcategory].buckets.forEach((rowSubcategoryBucket) => {
            const subCategoryData = Array(matrix.x[colCategory].buckets.length).fill(null);
            rowSubcategoryBucket[colCategory].buckets.forEach((cellData) => {
                const colCategoryIndex = matrix.x[colCategory].buckets.findIndex(colBucket => colBucket.key === cellData.key);
                subCategoryData[colCategoryIndex] = cellData.doc_count;
            });
            tableData.rows.push([rowSubcategoryBucket.key].concat(subCategoryData));
        });
    });

    return tableData;
};


const App = () => {
    const tableData = convertMatrixToDataTable(matrixContext);
    return (
        <div className='App'>
            <DataTable tableData={tableData} />
        </div>
    );
}

export default App;
