import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
// import sectorMap from '../../../../public/assets/sectorMap.json';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsBackComponent } from '../../components/news-back/news-back.component';
import { StockService } from '../../services/stock.service';
import { StockBackComponent } from '../../components/stock-back/stock-back.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NewsBackComponent,
    StockBackComponent,
    FormsModule,
  ],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss',
})
export class BackendComponent {
  rawJson: string = '';
  articleForm: FormGroup;
  stockForm: FormGroup;
  isSubmited = false;
  isStockSubmited = false;
  newsItems: any[] = [];
  stocks: any[] = [];

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private stockService: StockService,
    private http: HttpClient
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern('(http[s]?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|svg))'),
        ],
      ],
      newsUrl: [
        '',
        [Validators.required, Validators.pattern('(http[s]?:\\/\\/.*)')],
      ],
    });

    this.stockForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      mcap: ['', Validators.required],
      pe: ['', Validators.required],
      roce: ['', Validators.required],
      roe: ['', Validators.required],
      sector: ['', Validators.required],
    });

    newsService.news$.subscribe((response) => {
      this.newsItems = response;
    });
    stockService.stocks$.subscribe((response) => {
      this.stocks = response;
    });
  }

  async onSubmitNews() {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      this.isSubmited = true;
      this.newsService.addOneNews(this.articleForm.value);
      await this.sleep(3000);
      this.isSubmited = false;
      // You can emit or send this data to a backend API
    }
  }

  async onSubmit() {
    if (this.stockForm.valid) {
      this.isStockSubmited = true;
      this.stockService.addStock(this.stockForm.value);
      await this.sleep(3000);
      this.isStockSubmited = false;
      // You can emit or send this data to a backend API
    }
  }

  submitStocks() {
    try {
      const parsed = JSON.parse(this.rawJson);

      if (!Array.isArray(parsed)) {
        alert('Invalid input: must be a JSON array.');
        return;
      }

      this.http.post('http://localhost:3000/stock/bulk-add', parsed).subscribe({
        next: () => {
          alert('Stocks added successfully!');
          this.rawJson = '';
        },
        error: (err) => {
          console.error(err);
          alert('Failed to add stocks');
        },
      });
    } catch (e) {
      alert('Invalid JSON format');
    }
  }
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  outputJson: any[] = [];

  sectorMap: { [key: string]: string } = {
    'NSE India Limited': 'finance',
    'TATA Capital': 'finance',
    'SBI Mutual Fund': 'finance',
    'Nayara Energy (Formerly Essar Oil) Limited': 'energy',
    'HDB Financial Services Limited': 'finance',
    'Capgemini Technology Services India Limited': 'it',
    'Anheuser Busch Inbev (Sabmiller) India Limited': 'fmcg',
    'ORAVEL STAYS LIMITED (Oyo)': 'hotels',
    'Goa Shipyard Limited': 'insurance',
    'SBI General Insurance': 'finance',
    'Hella Infra Market Private Limited': 'fmcg',
    'Big Basket': 'finance',
    NSDL: 'miscellaneous',
    'Cochin International Airport Limited': 'insurance',
    'Hero Fincorp Limited': 'finance',
    'Care Health (Previously Religare Health) Insurance Company Limited':
      'electronics',
    'Boat Price (Imagine Marketing)': 'finance',
    'HDFC Securities Limited': 'insurance',
    'Reliance General Insurance': 'energy',
    'Inox Leasing And Finance Limited': 'finance',
    'Vikram Solar': 'finance',
    'Hinduja Leyland Finance Limited': 'investment',
    'SK Finance Limited': 'investment',
    'Vivriti Capital Limited': 'investment',
    'ASK Investment Managers Limited': 'finance',
    'Motilal Oswal Home Finance Limited': 'chemical',
    'Incred Holdings Limited': 'packaging',
    'Indian Potash Limited': 'steel',
    'Manjushree Technopack India Limited': 'construction',
    'Parag Parikh Financial Advisory Services Ltd. (PPFAS)': 'insurance',
    'Electrosteel Steels Limited': 'sports',
    'Signify Innovations (Previously Phillips Lighting) India Limited':
      'energy',
    CSK: 'finance',
    'Shriram Life Insurance Co. Ltd': 'consumer',
    'Sterlite Power Transmission Limited': 'pharma',
    'ORBIS FINANCIAL CORPORATION': 'consumer',
    PharmEasy: 'finance',
    'Carrier Airconditioning & Refrigeration Limited': 'manufacturing',
    'Philips India Limited': 'forging',
    'Metropolitan Stock Exchange (MSEI)': 'banking',
    'Taparia Tools Limited': 'finance',
    'Otis Elevator (India) Limited': 'finance',
    Polymatech: 'services',
    'Arohan Financial Services': 'it',
    'BVG India Limited': 'services',
    'Bharat Nidhi (Bharat Bank)': 'manufacturing',
    ESDS: 'mining',
    'Pace Digitek Infra Private Limited': 'manufacturing',
    'Merino Industries Limited': 'consumer',
    'PNB Finance & Industries Limited': 'manufacturing',
    'Hutti Gold Mines Company Limited': 'energy',
    'TRL Krosaki Refractories Limited': 'miscellaneous',
    'Philips Domestic Appliances India': 'power',
    'Camac Commercial Company Limited': 'pharma',
    'C&S Electric Limited': 'construction',
    'RDC Concrete (India) Limited': 'finance',
    'Paymate India Limited': 'metal',
    'Veeda Clinical Research Limited': 'finance',
    'IKF Finance Limited': 'services',
    'Onix Renewable Limited': 'hotels',
    'Indofil Industries Limited': 'consumer',
    'Sambhv Steel': 'consumer',
    'Fincare Business Finance': 'finance',
    'Bharat Hotels': 'electronics',
    'Studds Accessories Limited': 'manufacturing',
    'Digvijay Finlease': 'construction',
    'Bootes Impex Tech Ltd.': 'manufacturing',
    'LAVA International Limited': 'finance',
    Bira: 'energy',
    'Hindusthan Engineering & Industries Limited': 'holdings',
    'Utkarsh Micro Finance(Core Invest)': 'finance',
    'Power Exchange India Limited (PXIL)': 'consumer',
    'Lords Mark Industries Limited': 'manufacturing',
    'Axles India Limited': 'engineering',
    'National Commodity & Derivatives Exchange (NCDEX) Limited': 'airports',
    'Mohan Meakin Limited': 'manufacturing',
    'GKN Driveline India Limited': 'hospitals',
    'Frick India Limited': 'exchange',
    'Kineco Limited': 'edtech',
    'Kannur International Airport Limited': 'it',
    'Royalcare Super Speciality Hospitals': 'consumer',
    'KURLON Enterprise Limited': 'fintech',
    'Jaro Education': 'pharma',
    'Kanara Consumer Products ( Formerly Known As Kurl-on Limited)':
      'manufacturing',
    'Goodluck Defence And Aerospace': 'defence',
    'Arch Pharmalabs Limited': 'engineering',
    'Fino Paytech Limited': 'manufacturing',
    'Transline Technologies Limited': 'energy',
    'Maharaja Shree Umaid Mills': 'consumer',
    'Dalmia Bharat Refractories Limited': 'finance',
    'India Exposition Mart Ltd': 'hospitals',
    'Midland Micro Finance Limited': 'manufacturing',
    'Spray Engineering Devices': 'manufacturing',
    'Lakeshore Hospital Price': 'manufacturing',
    'Lotte India Corporation Limited': 'agriculture',
    'Roots Multiclean Limited': 'consumer',
    'Elofic Industries Limited': 'energy',
    'Apollo Green Energy Limited': 'energy',
    'Parry Agro Industries Limited': 'trading',
    'Shree Refrigerations Limited': 'manufacturing',
    'Insolare Energy': 'finance',
    'A V Thomas & Co. Limited': 'metal',
    'Ring Plus Aqua Limited': 'services',
    'RKB Global Limited': 'engineering',
    'Honeywell Electrical Devices And Systems India': 'services',
    'KLM Axiva Finvest Price': 'consumer',
    'National E-Repository Limited (NeRL)': 'energy',
    'Fly SBS': 'energy',
    'Blu-Smart Mobility Private Limited': 'engineering',
    'Urban Tots': 'agriculture',
    'Bombay Gas Company Limited': 'consumer',
    'Maharashtra Knowledge Corporation (MKCL) Limited': 'power',
    'Vimla Fuels And Metals Limited': 'engineering',
    'Schneider Electric President Systems': 'engineering',
    'Tea Time': 'finance',
    'Eaton Fluid Power Limited': 'services',
    'San Engineering And Locomotive Company Limited': 'services',
    'AITMC Ventures Pvt. Ltd. (AVPL) Price': 'manufacturing',
    'XtraNet Technologies Pvt. Ltd.': 'chemical',
    'Hella India Lighting': 'healthcare',
    'Martin And Harris Laboratories Limited': 'services',
    'Inkel Limited': 'construction',
    'Archit Nuwood': 'consumer',
    'ADIANCE TECHNOLOGIES': 'services',
    'Empire Spices And Foods Limited': 'finance',
    'CTR Manufacturing Industries Limited': 'manufacturing',
    'ACS Technologies Limited': 'exchange',
    'Berar Finance Limited': 'forging',
    'NCL Buildtek Limited (Previously NCL Alltek & Seccolor Limited)':
      'manufacturing',
    'Hive Hostels': 'consumer',
    'ICEX (Indian Commodity Exchange) Limited': 'finance',
    'Anugraha Valve Castings Limited': 'consumer',
    'Resin & Plastic Limited': 'energy',
    'India Carbon Limited': 'manufacturing',
    'Bombay Swadeshi Stores Limited': 'manufacturing',
    'Maxvalue Credits And Investments': 'metal',
    'HCIN Networks Private Limited': 'manufacturing',
    'GRE Renew Enertech Private Limited': 'consumer',
    'DSM Fresh Foods Zappfresh': 'services',
    'Mohindra Fasteners Limited': 'engineering',
    'Usha Shriram': 'services',
    'Matrix Gas And Renewables': 'engineering',
    'Madhur Iron And Steel (India)': 'pharma',
    Ecosure: 'engineering',
    'RRP S4E Innovation Price': 'services',
    'Bagrrys India Limited': 'finance',
    'Premier Cryogenics Limited': 'manufacturing',
    'Himalayan Heli Services': 'energy',
    'RNIT Solutions & Services': 'hospitals',
    'Quality Enviro Engineers Private Limited': 'holdings',
    'Ramaraju Surgical Cotton Mills Limited': 'services',
    'Roop Telsonic Ultrasonix Limited': 'engineering',
    'ICL Fincorp Limited': 'consumer',
    'Delta Galaxy': 'services',
    'Assam Carbon Products Limited': 'chemical',
    'Kusum Industrial Gases Limited': 'consumer',
    'Down Town Hospital Limited': 'finance',
    'Imperative Business Ventures Limited': 'services',
    'Adtech Systems Limited': 'engineering',
    'Raviraj Process Control Ltd': 'manufacturing',
    'Apollo Fashion International': 'services',
    'Amol Minechem Limited': 'construction',
    'Bazar India': 'pharma',
    'Silverline Technologies Limited': 'exchange',
    'Market Simplified Price': 'finance',
    'Optivalue Tek Consulting Limited': 'consumer',
    'Sri Vishnu Shankar Mill Limited': 'manufacturing',
    'The Scottish Assam (India) Limited': 'pharma',
    'Zak Venture Ltd': 'manufacturing',
    'Hicks Thermometers India Limited': 'chemical',
    'Calcutta Stock Exchange': 'services',
    'NCL Holdings': 'engineering',
    'Rydak Syndicate Limited': 'manufacturing',
    'Livespace Interiors Pvt Ltd': '',
    'Auckland Jute Co. Limited': '',
    'Deys Medical Stores (Mfg) Limited': '',
    'GG Automotive Gears Limited': '',
    'Sigachi Laboratories Limited': '',
    'Bolzen And Mutter': '',
    'Claps Oiltech': '',
    'Milton Cycle Industries Limited': '',
    'Xerox India Limited': '',
    'Nidec India Precision Tools Ltd.(Formerly Mitsubishi Heavy Industries)':
      '',
    'PNB MetLife Insurance': '',
    'Hira Ferro Alloys': '',
    'APL Metals': '',
    'Sri Sarvaraya Sugars Limited': '',
    'Rathi Industries Limited': '',
    'Ambadi Investments Limited (murugappa)': '',
    'Vyara Tiles Limited': '',
    'Thalappakatti Hotels Private Limited': '',
    'Victory Electric Vehicles International Limited': '',
    Zepto: '',
    'Prisma AI Private Limited': '',
    'Hero Motors Limited': '',
  };

  parseNumber(value: any): number | null {
    if (
      value == null ||
      value === '' ||
      (typeof value === 'string' && value.trim().toLowerCase() === 'n/a')
    ) {
      return null;
    }
    return Number(value);
  }

  cleanCompanyName(name: string): string {
    return name
      .trim()
      .replace(/ Unlisted Share(?:s)?(?: Price)?(?: \([^)]+\))?$/i, '');
  }

  onFileChange(evt: any): void {
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) return;

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws);

      this.outputJson = data.map((item: any) => {
        const rawName = item['Company Name'] || '';
        const cleanedName = this.cleanCompanyName(rawName);

        return {
          name: cleanedName,
          price: this.parseNumber(item['Price']),
          mcap: this.parseNumber(item['Mcap(in cr.)']),
          pe: this.parseNumber(item['P/E']),
          pb: this.parseNumber(item['P/B']),
          roce: this.parseNumber(item['Roce(%)']),
          roe: this.parseNumber(item['Roe(%)']),
          three_yr_rev_charge: this.parseNumber(item['3yr. REV. Charge']),
          three_yr_pat_charge: this.parseNumber(item['3yr PAT Charge']),
          pbtbcfo: this.parseNumber(item['PBT/CFO']),
          de: this.parseNumber(item['D/E']),
          ds: this.parseNumber(item['D/S']),
          sector: this.sectorMap[cleanedName] || 'Unknown',
        };
      });

      // ✅ Now safe to handle outputJson
      try {
        // const parsedString = JSON.stringify(this.outputJson);
        // const parsed = JSON.parse(parsedString);

        if (!Array.isArray(this.outputJson)) {
          alert('Invalid input: must be a JSON array.');
          return;
        }

        this.http
          .post('https://stockapp-backend-1at5.onrender.com/stock/bulk-add', this.outputJson)
          .subscribe({
            next: () => {
              alert('Stocks added successfully!');
              this.rawJson = '';
            },
            error: (err) => {
              console.error(err);
              alert('Failed to add stocks');
            },
          });
      } catch (e) {
        alert('Invalid JSON format');
      }
    };

    reader.readAsBinaryString(target.files[0]); // <-- don't run anything after this
  }
}
